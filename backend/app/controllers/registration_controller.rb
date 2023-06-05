class RegistrationController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    # render plain: params[:user]
    if @user.save
      redirect_to root_path, notice: "Successfully account created"
    else
      puts "hii #{@user.errors.any?} hello #{@user.errors.full_messages}"
      # render 'registration/new'
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end