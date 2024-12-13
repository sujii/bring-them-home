module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "value-keyword-case": null,
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-named": "never",
    "declaration-property-unit-allowed-list": {
      "font-size": "rem",
    },
  },
}
