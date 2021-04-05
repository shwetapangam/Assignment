// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import axios from "axios"
require("jquery")


Rails.start()
Turbolinks.start()
ActiveStorage.start()


$( document ).on('turbolinks:load', function() {

	const user = $("#current_user_name").val();

	axios({
		method: 'get',
		url: 'https://api.github.com/users/'+user+'/followers'
	})
	.then(function (response) {
		$("#git_follower_count").append(response.data.length)

	});

	axios({
		method: 'get',
		url: 'https://api.github.com/'+user+'/shwetapangam/repos'
	})
	.then(function (response) {
		$("#git_repo_count").append(response.data.length)
	});
})