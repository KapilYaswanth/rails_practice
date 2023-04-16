class User < ApplicationRecord
  has_secure_password
  #password: string virtual attribute
  #password_confirmation: string virtual attribute

  validates :email, presence: true, format: {with: /\A[^@\s]+@[^@\s]+\z/, message: 'enter a valid email'}
end
