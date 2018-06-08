<template>
  <v-card>
    <v-card-media v-if="post.image" height="250px" :src="post.image">
    </v-card-media>
    <v-btn icon @click.native="show = !show" style="float:right">
      <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
    </v-btn>
    <v-card-title>
      <div>
        <div v-if="post._source.type" class="grey--text"><br />{{post._source.type.name}}</div>
        <div class="headline">
          <v-icon style="margin:-5px 0 0 -5px;" color="red" v-if="post.access === 'restricted'">lock_outline</v-icon>
          <span v-html="post.title"></span>
        </div>
      </div>
    </v-card-title>
    <v-card-text>
        <div v-show="show">
          <h4 v-if="post.dates">{{post.dates}} - {{post.location}}</h4>
            <div v-if="post.authors">
            <b>Authors: </b><span v-html="post.authors"></span>
            </div>
            <div v-if="post.chairs">
              <b>Chairs: </b>
              <span v-html="post.chairs"></span>
            </div>
            <div v-if="post._source.speakerText">
              <b>Speaker: </b><span v-html="post._source.speakerText"></span>
            </div>
            <div v-if="post._source.aims">
              <b>Aims: </b>
              <span v-html="post._source.aims"></span>
            </div>
            <div v-if="post._source.audience">
              <b>Audience: </b>
              <span v-html="post._source.audience"></span>
            </div>
            <span v-if="post.lead" v-html="post.lead"></span>
        </div>
      <div><v-chip v-for="track in post._source.tracks" :key="track._id">{{track.name}}</v-chip></div>
      <div><v-chip v-for="tag in post._source.tags" :key="tag._id">{{tag.name}}</v-chip></div>
      <v-chip v-if="post.type" outline color="primary">{{post.type}}</v-chip>
      <v-chip v-if="post.category" outline color="primary">{{post.category}}</v-chip>

    </v-card-text>
    <v-card-actions>
      <v-btn
        v-if="post.type === 'session' && post._id && post.k4EventNumber"
        :href="`https://k4.ersnet.org/prod/v2/Front/Program/Session?e=${post.k4EventNumber}&session=${post._id}`"
        target="_blank"
        flat color="primary">More</v-btn>
      <v-btn
        v-if="post.type === 'presentation' && post._id && post._source.sessionID"
        :href="`https://k4.ersnet.org/prod/v2/Front/Program/Session?e=${post.k4EventNumber}&session=${post._source.sessionID}`"
        target="_blank"
        flat color="primary">More</v-btn>
      <v-btn
        v-if="post.url"
        :href="post.url"
        target="_blank"
        flat color="primary">Read</v-btn>
      <v-btn
        v-if="post.registerButton && post.registerButton.link"
        :href="post.registerButton.link"
        target="_blank"
        flat color="primary"
        v-html="post.registerButton.text ? post.registerButton.text : 'Register'"
        ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: ['post'],
  name: 'card'
}
</script>
