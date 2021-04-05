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
	const user_id = $("#current_user_id").val();
	const provider = $("#current_user_provider").val();

if(provider == "github"){
	let github_follower_url = "https://api.github.com/users/"+user+"/followers";
	let github_repo_url = "https://api.github.com/users/"+user+"/repos";

	const requestGithubFollower = axios.get(github_follower_url);
	const requestGithubRepo = axios.get(github_repo_url);

	axios
	.all([requestGithubFollower, requestGithubRepo])
	.then(
		axios.spread((...responses) => {
			const github_follow_res = responses[0];
			const github_repo_res = responses[1];

			$("#git_follower_count").append(github_follow_res.data.length);
			$("#git_repo_count").append(github_repo_res.data.length);

		})
		)
	.catch(errors => {
		console.error(errors);
	});
}else if(provider == "twitter"){
	let twitter_follower_url = "https://api.twitter.com/2/users/"+user_id+"/followers";
	let twitter_repo_url = "https://api.twitter.com/2/users/"+user_id+"/tweets";

	const requestTwitterFollower = axios.get(twitter_follower_url);
	const requestTwitterTweets = axios.get(twitter_repo_url);

	axios
	.all([requestTwitterFollower, requestTwitterTweets])
	.then(
		axios.spread((...responses) => {
			const twitter_follow_res = responses[0];
			const twitter_tweet_res = responses[1];

			$("#twitter_follower_count").append(twitter_follow_res.data.length);
			$("#twitter_repo_count").append(twitter_tweet_res.data.length);

		})
		)
	.catch(errors => {
		console.error(errors);
	});

}

})