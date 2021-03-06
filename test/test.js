"use strict";

const React = require("react");
const GroupedBarChartHorizontal = require("..");
const ReactTestUtils = require("react-addons-test-utils");
const assert = require("assert");

describe("<GroupedBarChartHorizontal/>", function() {
    it("shouldnt render", function() {
        const renderer = ReactTestUtils.createRenderer();
        const result = renderer.getRenderOutput(React.createElement(GroupedBarChartHorizontal));

        assert.strictEqual(result, null);
    });
});
