from peewee import *
from basemodel import BaseModel


class Board(BaseModel):
    title = CharField(unique=True)
