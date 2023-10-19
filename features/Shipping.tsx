import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDolly,
  faShippingFast,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
export default function Shipping() {
  return (
    <>
        <div className='row w3l-grids-footer border-top border-bottom py-sm-4 py-3'>
              <div className='col-md-4 offer-footer'>
                <div className='row'>
                  <div className='col-4 icon-fot'>
                    <FontAwesomeIcon icon={faDolly} size='3x' />
                  </div>
                  <div className='col-8 text-form-footer'>
                    <h3>Free Shipping</h3>
                    <p>on orders over $100</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 offer-footer my-md-0 my-4'>
                <div className='row'>
                  <div className='col-4 icon-fot'>
                    <FontAwesomeIcon icon={faShippingFast} size='3x' />
                  </div>
                  <div className='col-8 text-form-footer'>
                    <h3>Fast Delivery</h3>
                    <p>World Wide</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 offer-footer'>
                <div className='row'>
                  <div className='col-4 icon-fot'>
                    <FontAwesomeIcon icon={faThumbsUp} size='3x' />
                  </div>
                  <div className='col-8 text-form-footer'>
                    <h3>Big Selection</h3>
                    <p>of Car Products</p>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
