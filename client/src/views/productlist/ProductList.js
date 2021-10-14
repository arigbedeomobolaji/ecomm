// jshint ignore:start
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productListAction } from '../../actions/productListAction';
import LoadingBox from '../../components/loadingbox/LoadingBox';
import MessageBox from '../../components/messagebox/MessageBox';

const ProductList = (props) => {
	const productList = useSelector((state) => state.productList);
	const { products, error, loading } = productList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(productListAction());
	}, [dispatch]);

	const editProduct = (id) => {
		props.history.push(`/products/${id}/edit`);
	};

	return (
		<div>
			<div className='row'>
				<h1> Order History </h1>
				<Link to='/product/create' className='button button--primary'>
					Create Product
				</Link>
			</div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : !!error ? (
				<MessageBox variant='danger'>{error}</MessageBox>
			) : (
				products &&
				products.length && (
					<table className='table'>
						<thead>
							<tr>
								<th className='sm-screen'>ID</th>
								<th className=''>NAME</th>
								<th className='sm-screen'>PRICE</th>
								<th className='md-screen'>CATEGORY </th>
								<th className='md-screen'>BRAND </th>
								<th>ACTIONS</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<tr key={product._id}>
									<td className='sm-screen'>{product._id}</td>
									<td> {product.name}</td>
									<td className='sm-screen'>
										{product.price}
									</td>
									<td className='md-screen'>
										{product.category}
									</td>
									<td className='md-screen'>
										{product.brand}
									</td>
									<td>
										<button
											className='button button--small'
											onClick={() =>
												editProduct(product._id)
											}
										>
											Edit
										</button>
										<button className='button button--small'>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)
			)}
		</div>
	);
};

export default ProductList;
