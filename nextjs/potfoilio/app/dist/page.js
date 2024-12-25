"use strict";
exports.__esModule = true;
var Grid_1 = require("@/components/Grid");
var Hero_1 = require("@/components/Hero");
var RecentProjects_1 = require("@/components/RecentProjects");
var FloatingNavbar_1 = require("@/components/ui/FloatingNavbar");
var data_1 = require("@/data");
function Home() {
    return (React.createElement("main", { className: "relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5" },
        React.createElement("div", { className: "max-w-7xl w-full" },
            React.createElement(FloatingNavbar_1.FloatingNav, { navItems: data_1.navItems }),
            React.createElement(Hero_1["default"], null),
            React.createElement(Grid_1["default"], null),
            React.createElement(RecentProjects_1["default"], null))));
}
exports["default"] = Home;
