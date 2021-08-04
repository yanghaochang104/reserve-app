import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from app import create_app
from models import setup_db, database_path, User, Reservation


class ReserveAppTestCase(unittest.TestCase):
    
    '''
    defind test variables and setup test app
    '''
    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client
        self.database_name = 'reserve_test'
        self.host = ''
        self.database_path = 'postgresql://{}/{}'.format(self.host, self.database_name)
        setup_db()
        
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            self.db.create_all()
    
    '''
    executed after each test
    '''
    def tearDown(self):
        pass
    
    '''
    test login
    '''
    def test_login(self):
        pass
    
if __name__ == "__main__":
    unittest.main()
    
    