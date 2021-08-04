from flask import Flask, json, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import setup_db

'''
create and configure app
'''
def create_app(test_config=None):
    app = Flask(__name__)
    setup_db(app)
    CORS(app)
    
    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization, true')
        response.headers.add('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
        return response
    
    '''
    sign up as a new member
    '''
    @app.route('/register', methods=['POST'])
    def sign_up():
        pass
    
    '''
    varify current member and enter member page
    '''
    @app.route('/members/<int:member_id>', methods=['GET'])
    # @requires_auth('get:member_id')
    def enter_member_page(member_id):
        pass


    '''
    make reservation
    '''
    @app.route('/members/<int:member_id>/reservation', methods=['POST'])
    def make_reservation():
        pass
    
    
    '''
    get reservation records
    '''
    app.route('/members/<int:member_id>/records', methods=['GET'])
    def get_all_records():
        pass
    
    
    '''
    check specific reservation record
    '''
    @app.route('/members/<int:member_id>/records/<int:records_id>', methods=['GET'])
    def get_record(records_id):
        pass
    
    
    '''
    update specific reservation record
    '''
    @app.route('/members/<int:member_id>/records/<int:records_id>', methods=['PUT'])
    def update_record(records_id):
        pass
    
    
    '''
    delete specific reseration record
    '''
    @app.route('/members/<int:member_id>/records/<int:records_id>', methods=['DELETE'])
    def delete_record(records_id):
        pass
    
    return app  

  
