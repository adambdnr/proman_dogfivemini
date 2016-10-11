from peewee import *
from basemodel import BaseModel
from board_model import Board

class ListModel(BaseModel):
    owner_board = ForeignKeyField(Board, related_name="board_title")
    title = CharField(unique=True)
