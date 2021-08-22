import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";

import { withAuthRedirect } from "../../hoc/authCheck";
import { getVideoThunk } from "../../redux/reducers/videos";
import { addFavoriteThunk } from "../../redux/reducers/favorites";

import Data from "./Data";
import Search from "./Search";

const Home = ({
  videos, getVideoThunk,
  videos_request, request_info, user_id,
  addFavoriteThunk,  notification 
  }) => {

  const onSearch = value => {
    getVideoThunk(value)
  }

  let addRequest = (request_value, slider, value) => {
    addFavoriteThunk({
        id: user_id,
        request: request_value,
        title: value.title,
        sort_variant: value.sort ? value.sort : "date",
        videos_number: slider ? slider : 12
    })
}

  return videos.length ?(
    <Data 
      videos={videos} 
      onSearch={onSearch} 
      videos_request={videos_request} 
      request_info={request_info}
      user_id={user_id}
      handleSubmit={addRequest}
      notification_request={notification}
    />
  ) : <Search onSearch={onSearch}/> 
}

const mapStateToProps = (state) => ({
  videos: state.videos.videos_item,
  videos_request: state.videos.videos_request,
  request_info: state.videos.request_info,
  user_id: state.user.id,
  notification: state.favorites.notification
})

export default compose(
  connect(mapStateToProps, {getVideoThunk, addFavoriteThunk}),
  withAuthRedirect
)(Home);
