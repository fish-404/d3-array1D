import * as d3 from "d3";

class Array1D {
    constructor(config) {
        this.config = config;
    }

    drawArray1D() {
        this.svg = d3.select(this.config.selector).insert("svg").attr("width", this.config.width);

        this.svg 
            .selectAll("g")
            .data(this.config.data)
            .enter()
            .append("g")
            .append("rect")
            .attr("width", this.config.boxLen)
            .attr("height", this.config.boxLen)
            .attr("x", (d, i) => i * this.config.boxLen + this.config.margin)
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
            .attr("x", (d, i) => i * this.config.boxLen + this.config.margin + this.config.boxLen / 2)
            .attr("y", this.config.boxLen + this.config.margin * 2)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "hanging")
            .select(function() {
                return this.parentNode;
            })
            // value text
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * this.config.boxLen + this.config.margin + this.config.boxLen / 2)
            .attr("y", this.config.boxLen / 2)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
    }

    colorArray1D(start, end, fillColor) {
        this.svg
            .selectAll(`g:nth-child(n+${start-1}):nth-child(-n+${end-1}) rect`)
            .attr("fill", fillColor);
    }
}

export default Array1D;