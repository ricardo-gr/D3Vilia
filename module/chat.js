/**
 * Optionally hide the display of chat card action buttons which cannot be performed by the user
 */
export const displayChatActionButtons = function(message, html, data) {
  const chatCard = html.find(".D3Vilia.chat-card");
  if (chatCard.length > 0) {

    // If the user is the message author or the actor owner, proceed

    const buttons = chatCard.find("button[data-action]:not(.everyone)");
    buttons.each((a, btn) => {
      if (game.settings.get("D3Vilia", "allowPlayersApplyActions"))
        $(btn).addClass('everyone')
    });
    const actor = game.actors.get(data.message.speaker.actor);
    if (actor && actor.owner) return;
    else if (game.user.isGM || (data.author.id === game.user.id)) return;

    // Otherwise make buttons disabled, but show the actions action buttons
    buttons.each((a, btn) => {
      if (!game.settings.get("D3Vilia", "allowPlayersApplyActions"))
        btn.disabled = true
    });
  }
};

/* -------------------------------------------- */

export const createCustomChatMessage = async function(chatTemplate, chatTemplateData={}, chatData={}, {rolls=[]}={}) {
  let rollMode = game.settings.get("core", "rollMode");
  chatData = mergeObject({
    rollMode: rollMode,
    user: game.user._id,
    type: CONST.CHAT_MESSAGE_TYPES.CHAT,
  }, chatData);
  chatData.content = await renderTemplate(chatTemplate, chatTemplateData);
  // Handle different roll modes
  switch (chatData.rollMode) {
    case "gmroll":
      chatData["whisper"] = game.users.entities.filter(u => u.isGM).map(u => u._id);
      break;
    case "selfroll":
      chatData["whisper"] = [game.user._id];
      break;
    case "blindroll":
      chatData["whisper"] = game.users.entities.filter(u => u.isGM).map(u => u._id);
      chatData["blind"] = true;
      break;
  }

  // Dice So Nice integration
  if (chatData.roll != null && rolls.length === 0) rolls = [chatData.roll];
  if (game.dice3d) {
    let promises = []
    for (let roll of rolls) {
      promises.push(game.dice3d.showForRoll(roll, game.user, true, chatData.whisper, chatData.blind));
    }
    await Promise.all(promises)
    chatData.sound = null;
  }

  ChatMessage.create(chatData);
  return true;
};

export const hideRollInfo = function(app, html, data) {
  const whisper = app.data.whisper || [];
  const isBlind = whisper.length && app.data.blind;
  const isVisible = whisper.length ? (whisper.includes(game.user._id) || (app.isAuthor && !isBlind)) : true;
  if (!isVisible) {
    html.find(".dice-formula").text("???");
    html.find(".dice-total").text("?");
    html.find(".dice").text("");
    html.find(".success").removeClass("success");
    html.find(".failure").removeClass("failure");
  }
};

export const hideGMSensitiveInfo = function(app, html, data) {
  if (game.user.isGM) return;

  let speaker = app.data.speaker,
    actor = speaker != null ? (speaker.actor ? game.actors.get(speaker.actor) : game.actors.tokens[speaker.token]) : null;
  console.log('D3Vilia | Message | Cleaning ', actor, app, html)
  if (!actor || (actor && actor.hasPerm(game.user, "LIMITED"))) return;

  // Hide info
  html.find(".gm-sensitive").remove();


  if (game.settings.get("D3Vilia", "playersNoDamageDetails")) {
    html.find(".toggle-content").remove();
  }

  if (game.settings.get("D3Vilia", "playersNoDCDetails")) {
    html.find(".dc-value").text("?");
  }
};


export const enableToggles = function(app, html, data) {
  html.on('click', '.toggle-header', (event) => {
    event.preventDefault();
    const header = event.currentTarget;
    const card = header.closest(".toggle-box");
    const content = card.querySelector(".toggle-content");
    $(content).slideToggle(400)
  })
}