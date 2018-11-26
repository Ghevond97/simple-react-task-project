import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Fa } from 'mdbreact';

import finish from '../../finish.png';

import './testStyle.css';

class FinishCard extends Component {
  render() {
    const { history } = this.props;

    const ingredients = JSON.parse(localStorage.getItem('ingredients')) || [];
    const crust = localStorage.getItem('crust') || '';

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div className="finishPage">
          <div className="finish-component">
            <h2
              className="h1-responsive font-weight-bold my-5 text-center"
              style={{ color: 'firebrick' }}
            >
              <Fa icon="cutlery" className="pr-2" />
              Final Order Details
            </h2>
          </div>
          <div className="cont_principal">
            <div className="cont_central">
              <div className="cont_modal cont_modal_active">
                <div className="cont_photo">
                  <div className="cont_img_back">
                    <img src={finish} alt="finish" />
                  </div>
                  <div className="cont_detalles">
                    <h3 style={{paddingLeft:'10%'}}>Codeep Pizza</h3>
                    <p style={{paddingLeft:'10%'}}>your very own detailed pizza from Mergelyan Cluster</p>
                  </div>
                </div>
                <div className="cont_text_ingredients">
                  <div className="cont_over_hidden">
                    <div className="cont_tabs">
                      <ul>
                        <li>
                          <Link to="#">
                            <h4>DETAILS</h4>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="cont_text_det_preparation">
                      <div className="cont_title_preparation">
                        <p>CRUST</p>
                      </div>
                      <div className="cont_info_preparation">
                        <p>{crust}</p>
                      </div>
                      <div className="cont_text_det_preparation">
                        <div className="cont_title_preparation">
                          <p>TOPPINGS</p>
                        </div>
                        <div className="cont_info_preparation">
                          <p style={{ fontSize: '1em' }}>
                            {ingredients.map((el, i) => (
                              <div>
                                <span key={i}>{el.description + ', '} </span>
                              </div>
                            ))}
                            <span style={{ fontWeight: 'bold' }}>
                              Price {ingredients.length * 0.5}$
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '32%'
            }}
          >
            <button
              className="btn peach-gradient"
              style={{ fontSize: '1em', color: 'midnightblue' }}
              onClick={() => history.push('/topping')}
            >
              Edit Toppings
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FinishCard;
