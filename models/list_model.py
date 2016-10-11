from peewee import *
from basemodel import BaseModel
from board_model import Board

class List(BaseModel):
    board_owner = ForeignKeyField(Board, related_name="board_title")
    title = CharField(unique=True)
