import React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import 'map.css';

export default function Map() {
    componentDidMount() { 

    const svg = d3.select("svg");
    
    const path = d3.geoPath();
    
    d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
      if (error) throw error;
    
      svg.append("g")
          .attr("class", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
          .attr("d", path);
    
      svg.append("path")
          .attr("class", "state-borders")
          .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
    });

    d3.csv("statePop.csv", function(data) {
    // color.domain([0,1,2,3]);
    // stateName = data.feature.name;
    });
    };
    
return (
    <Map>
    <svg width="960" height="600"></svg>
    </Map>
)
}
    
