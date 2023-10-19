
export default function Newsletter() {
  return (
    <>
    <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
						<p className="mb-3">Free Delivery on your first order!</p>
						<form action="#" method="post">
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Email" name="email" 
                                // required="" 
                                />
								<input type="submit" value="Go" />
							</div>
						</form>
        </>
  )
}
