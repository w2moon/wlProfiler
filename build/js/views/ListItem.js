"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var React = require("react");
var ItemInfo = (function () {
    function ItemInfo(name, time, amount, selected) {
        if (selected === void 0) { selected = false; }
        this.name = name;
        this.time = time;
        this.amount = amount;
        this.selected = selected;
    }
    __decorate([
        mobx_1.observable
    ], ItemInfo.prototype, "selected");
    return ItemInfo;
}());
exports.ItemInfo = ItemInfo;
var ListItem = mobx_react_1.observer(function (_a) {
    var itemInfo = _a.itemInfo;
    return React.createElement("div", null,
        itemInfo.name,
        " ",
        itemInfo.time,
        " ",
        itemInfo.amount,
        " ", "" + itemInfo.selected);
});
exports["default"] = ListItem;
//# sourceMappingURL=ListItem.js.map