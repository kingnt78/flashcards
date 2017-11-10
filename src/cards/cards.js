import React, from 'react';
import '.card.css';

const Card = (props) => (
	<div className="card-container">
		<div className="card">
			<div className="front">{props.id}</div>
			
			</div>
			<div className="back">{props.flipsideA}
			</div>
		</div>
	</div>

)



export default Card`