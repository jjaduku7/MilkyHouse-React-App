import React from 'react'

function Varieties() {
  return (
    <nav className="container">
	
		<div className="row types-row">
			<h2 className="text-center">Some Varieties At MilkyHouse</h2>
			<br />
			<div className="col-md-3">
				<div className="thumbnail">
					<img src="../Images/chocolate.jpg" alt="Chocolate Milkshake" />
					<div className="caption">
					<h3>Chocolate Milkshake</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aut quaerat consequatur quae recusandae! Ipsam vel cum amet necessitatibus aliquid asperiores! Sed ut fugit animi quaerat accusantium, unde a pariatur.</p>						  
					</div>
				</div>
			</div>

			<div className="col-md-3">
				<div className="thumbnail">
					<img src="../Images/banana.jpg" alt="Banana Milkshake" />
					<div className="caption">
					<h3>Banana Milkshake</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aut quaerat consequatur quae recusandae! Ipsam vel cum amet necessitatibus aliquid asperiores! Sed ut fugit animi quaerat accusantium, unde a pariatur.</p>						  
					</div>
				</div>
			</div>

			<div className="col-md-3">
				<div className="thumbnail">
				  <img src="../Images/date.webp" alt="Date Milkshake" className="img-responsive" />
				  <div className="caption">
				  <h3>Date Milkshake</h3>
				  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aut quaerat consequatur quae recusandae! Ipsam vel cum amet necessitatibus aliquid asperiores! Sed ut fugit animi quaerat accusantium, unde a pariatur.</p>						  
				  </div>
				</div>
			</div>

			<div className="col-md-3">
				<div className="thumbnail">
					<img src="../Images/peach.jpg" alt="Peach Milkshake" />
					<div className="caption">
					<h3>Peach Milkshake</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aut quaerat consequatur quae recusandae! Ipsam vel cum amet necessitatibus aliquid asperiores! Sed ut fugit animi quaerat accusantium, unde a pariatur.</p>						  
					</div>
				</div>		
			</div>

		</div>

	</nav>
  )
}

export default Varieties