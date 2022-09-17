import * as d3 from "d3";

class Array1D {
    constructor(config) {
        this.config = conifg;
    }

    drawArray1D() {
        let container = d3.select(config.selector).insert("svg").attr("width", config.width);

        container
            .selectAll("g")
            .data(this.config.data)
            .enter()
            .append("g")
            .append("rect")
            .attr("width", this.config.boxLen)
            .attr("height", this.config.boxLen)
            .attr("x", (d, i) => i * this.config.boxLen + this.config.padding)
            .attr("y", this.config.padding)
            .attr("stroke", this.config.lineColor)
            .attr("stroke-width", this.config.lineWidth)
            .attr("fill", this.config.fillColor)
            .select(function() {
                return this.parentNode;
            })
            // index text
            .append("text")
            .text((d, i) => i)
            .attr("x", (d, i) => i * this.config.boxLen + this.config.margin / 2 + this.config.boxLen / 2)
            .attr("y", this.config.boxLen + this.config.margin * 2)
            .select(function() {
                return this.parentNode;
            })
            // value text
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * this.config.boxLen + this.config.marin / 2 + this.config.boxLen / 2)
            .attr("y", this.config.boxLen / 2 + this.margin)
    }
}

export default Array1D;