class User < ApplicationRecord
  attr_accessor :name, :email
  before_save { self.email = email.downcase }


  validates :name, presence: true, length:{maximum: 50}
  validates :email, presence: true, length:{maximum: 120},  format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }, uniqueness: true
  validates :password, length: { minimum: 6 }
  has_secure_password

  has_many :microposts
end
