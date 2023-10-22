
export default function Newsletter() {
  return (
    <>
    <h3 className="text-white font-bold mb-3 ">Newsletter</h3>
						<p className="mb-3 text-gray-400" style={{ color: "#bdbdbd" }}>Free Delivery on your first order!</p>
						<form action="#" method="post">
							<div className="form-group flex ">
								<input type="email" className="form-control bg-gray-100 p-2 rounded-md" placeholder="Email" name="email" />
								<input type="submit" value="Go" className="bg-[#f45c5d] text-gray-100 font-semibold rounded-md" style={{ backgroundColor: "#f45c5d", color: "#fff", width: "25%"}} />
							</div>
						</form>
        </>
  )
}
