import React, { Component } from 'react';
import { Card } from './card.js';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


export class CardHolder extends Component{

	constructor(){
		super();
    this.testHeights = [];
    for(let i = 0; i < 20; i++){
      this.testHeights.push({t : i, h : Math.random() * 300 + 300})
    }

    this.cols = this.assignCardsToCols(window.innerWidth, this.testHeights);

	}

	render(){
    // Create columns/card components
    const cards = this.createCardDOMLayout();

		return (
      <Grid fluid={true}>
        <Row style={{padding: 20}}>
          <div>Temporary Toolbar</div>
        </Row>
        <Row className={"cardHolder"}>
          {cards}
        </Row>
      </Grid>
		);
	}

  createCardDOMLayout(){
    return this.cols.map(function(col, i){
      return (
        <Col key={i} xs={Math.floor(12 / this.cols.length)}>
          {col.map(function(card, j){
            return (
              <Card key={j} height={card.h} text={card.t} />
            )
          }, this)}
        </Col>
      );
    }, this);
  }

  assignCardsToCols(w, cards){
    // Calculate number of columns
    const breakPoints = [0, 600, 900, 1200, 1600];
    const nCols = breakPoints.reduce(function(a, b, i, arr) {
      return (w > b) ? i : a;
    }) + 1;
    // Create array of columns
    let cols = [];
    for(let i = 0; i < nCols; i++){
      cols.push({val : [], totalH : 0});
    }
    // Greedy assign cards
    for(let c of cards){
      let minCol = cols.reduce(function(a, b, i, arr){
        return a.totalH > b.totalH ? b : a;
      });
      minCol.val.push(c);
      minCol.totalH += c.h;
    }

    return cols.map(function(col, i){
      return col.val;
    });
  }

}
