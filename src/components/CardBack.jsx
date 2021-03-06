//@flow
import * as React from 'react';
import {Link} from 'react-router-dom';
import type {Background} from '../types/props.js';

type Props = Background & {
  lockBack: () => void,
};

const CardBack = (props: Props) => (
  <figure className="card">
    <h2>{props.name}</h2>
    <p>{props.pitch}</p>
    <div id="hide" className="horizontal-line" />
    <h3>Background Features</h3>
    <ul id="skills" className="multi">
      <h4>Skill Proficiency</h4>
      {props.skill.map((sk, i) => <li key={i}>{sk}</li>)}
    </ul>

    {
      props.tool &&
        <ul data-test="back-tools" id="tools" className="multi">
          <h4>Tool Proficiency</h4>
          {props.tool.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    }

    {
      props.lang &&
        <ul data-test="back-langs" id="langs" className="multi">
          <h4>Languages</h4>
          <li>{props.lang[1]}</li>
        </ul>
    }

    <ul id="equip" className="dotted-list">
      <h4>Equipment</h4>
      {
        props.equip.map((list, i) => (
          <li key={i}>
            {list.map((item, j) => <span key={j}>{item}<br/></span>)}
          </li>
        ))
      }
    </ul>
    <div className="horizontal-line no-bottom" />
    <div className="lock-box">
      <Link to="/background">
        <button>Back</button>
      </Link>
      <Link to="/">
        <button data-test="back-lock" onClick={props.lockBack}>Lock</button>
      </Link>
    </div>
  </figure>
);

export default CardBack;
