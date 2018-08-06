<template>
  <v-card>{{post | json }}
    <v-img v-if="post.image" :src="post.image" height="250px"/>
    <v-btn icon style="float:right" @click.native="show = !show">
      <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
    </v-btn>
    <v-card-title>
      <div>
        <div v-if="post._source && post._source.type" class="grey--text"><br >{{post._source.type.name}}</div>
        <div class="headline">
          <v-icon v-if="post.access === 'restricted'" style="margin:-5px 0 0 -5px;" color="red">lock_outline</v-icon>
          <span v-html="post.title"/>
        </div>
      </div>
    </v-card-title>
    <v-card-text>
      <div v-show="show">
        <h4 v-if="post.dates">{{post.dates}} - {{post.location}}</h4>
        <div v-if="post.authors">
          <b>Authors: </b><span v-html="post.authors"/>
        </div>
        <div v-if="post.chairs">
          <b>Chairs: </b>
          <span v-html="post.chairs"/>
        </div>
        <div v-if="post._source.speakerText">
          <b>Speaker: </b><span v-html="post._source.speakerText"/>
        </div>
        <div v-if="post._source.aims">
          <b>Aims: </b>
          <span v-html="post._source.aims"/>
        </div>
        <div v-if="post._source.audience">
          <b>Audience: </b>
          <span v-html="post._source.audience"/>
        </div>
        <span v-if="post.lead" v-html="post.lead"/>
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
      />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "card",
  props: { post: { type: Object, default: () => {} } },
  data() {
    return {
      show: false
    };
  }
};
</script>
