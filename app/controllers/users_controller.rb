class UsersController < ApplicationController

	def create
		@user = User.create(user_params)

		    respond_to do |format|
		      if @user.save
			format.html { redirect_to years_path, notice: 'user was successfully created.' }
			format.json { render action: 'show', status: :created, location: @user }
		      else
			format.html { render action: 'new', notice: 'boooo' }
			format.json { render json: @user.errors, status: :unprocessable_entity }
		      end		
		     end
		#redirect_to years_path
	end
	
	def show
		#redirect_to years_path
  	end
	
	def update
		@user = User.create(user_params)
		respond_to do |format|
		      if @user.update(user_params)
			format.html { redirect_to @user, notice: 'user was successfully updated.' }
			format.json { head :no_content }
		      else
			format.html { render action: 'edit' }
			format.json { render json: @user.errors, status: :unprocessable_entity }
		      end
		    end
	end

	def destroy
	    @user = User.find(user_params)
	    @user.destroy
	    respond_to do |format|
	      format.html { redirect_to years_index }
	      format.json { head :no_content }
	    end
	end

	def user_params
     	 params.require(:user).permit(:name, :assignment_id)
    	end

end
