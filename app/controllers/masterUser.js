const viewUserModel = require( '../models/viewUser.js' );
const dateFormat = require( 'dateformat' );
var querystring = require('querystring');
var url = require( 'url' );
const date = require( '../libraries/date.js' );
const dateAndTimes = require( 'date-and-time' );
let jwt = require( 'jsonwebtoken' );
const config = require( '../../config/config.js' );
const uuid = require( 'uuid' );
const nJwt = require( 'njwt' );
const jwtDecode = require( 'jwt-decode' );
const mongoose = require( 'mongoose' );

exports.find = ( req, res ) => {

	url_query = req.query;
	var url_query_length = Object.keys( url_query ).length;

	viewUserModel.find( url_query, { 
		USER_AUTH_CODE: 1, 
		EMPLOYEE_NIK: 1, 
		USER_ROLE: 1, 
		LOCATION_CODE: 1, 
		REF_ROLE: 1, 
		"LOGIN.USERNAME": 1, 
		"LOGIN.LOG_LOGIN": 1, 
		"LOGIN.UPDATE_USER": 1, 
		"LOGIN.UPDATE_TIME": 1, 
		"PARAMETER.DESC": 1, 
		_id: 0 } 
	)
	.then( data => {
		if( !data ) {
			return res.send( {
				status: false,
				message: 'Data not found 2',
				data: {}
			} );
		}
		res.send( {
			status: true,
			message: 'Success',
			data: data
		} );
	} ).catch( err => {
		if( err.kind === 'ObjectId' ) {
			return res.send( {
				status: false,
				message: 'Data not found 1',
				data: {}
			} );
		}
		return res.send( {
			status: false,
			message: 'Error retrieving data',
			data: {}
		} );
	} );
};