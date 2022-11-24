import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

function Header(props) {
	return (
		<div
			className={'header' + (props.className ? ' ' + props.className : '')}
			//style={{ width: '101%' }}
		>
			<nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						Streamy
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto me-0 mb-2 mb-sm-0'>
							<li className='nav-item'>
								<Link className='nav-link' aria-current='page' to='/'>
									Streams
								</Link>
							</li>
							<li className='nav-item' style={{ cursor: 'pointer' }}>
								<GoogleAuth className='nav-link' />
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
