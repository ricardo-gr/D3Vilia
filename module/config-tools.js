export const applyConfigModifications = function () {
    // Translate currency
    let currencyNames = game.settings.get("D3Vilia", "currencyNames").split(",");
    CONFIG.D3Vilia.currencies.pp = game.i18n.localize(currencyNames[0] || "D3Vilia.CurrencyPP")
    CONFIG.D3Vilia.currencies.gp = game.i18n.localize(currencyNames[1] || "D3Vilia.CurrencyGP")
    CONFIG.D3Vilia.currencies.sp = game.i18n.localize(currencyNames[2] || "D3Vilia.CurrencySP")
    CONFIG.D3Vilia.currencies.cp = game.i18n.localize(currencyNames[3] || "D3Vilia.CurrencyCP")
}