<template>
  <v-card>
    <v-card-media v-if="post.image" :src="post.image" height="250px"/>
    <v-card-title>
      <div>
        <div v-if="post._source.type || post.type || post.category" class="grey--text"><br >
          <span v-if="post.category">{{post.category}}</span>
          <span v-if="((post._source.type && post._source.type.name) && post.category)"> - </span>
          <span v-if="post._source.type && post._source.type.name">{{post._source.type.name }}</span>
          <span v-if="(post.category || (post._source.type && post._source.type.name)) && post.type"> - </span>
          <span v-if="post.type">{{post.type}}</span>
        </div>
        <div class="headline">
          <v-icon v-if="post.access === 'restricted'" style="margin:-5px 0 0 -5px;" color="red">lock_outline</v-icon>
          <span v-html="post.title"/>
        </div>
      </div>
    </v-card-title>
    <v-list v-if="post.dates
      || post.location
      || post._source.room
    || congressTime">
      <v-list-tile v-if="post.dates || congressTime">
        <v-list-tile-action>
          <v-icon color="indigo">s7-date</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{post.dates || congressTime}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action v-if="post._source.registerButton && post._source.registerButton.link">
          <v-btn :href="post._source.registerButton.link" flat color="success">{{post._source.registerButton.text || 'Register'}}</v-btn>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile v-if="post.location || post._source.room">
        <v-list-tile-action>
          <v-icon color="indigo">s7-map-marker</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-if="post.location">{{post.location }}</v-list-tile-title>
          <v-list-tile-title v-if="post._source.room && post._source.room.length > 0">room {{ post._source.room[0].name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list v-if="post.authors
      || post.chairs
      || post._source.speakerText
      || post._source.organisers
    || post._source.faculty" two-line>
      <v-divider v-if="post.dates
        || post.location
        || post._source.room
      || congressTime"/>

      <v-list-tile v-if="post.authors">
        <v-list-tile-action>
          <v-tooltip bottom>
            <v-icon slot="activator" color="indigo">s7-pen</v-icon>
            <span>Authors</span>
          </v-tooltip>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title><span v-html="post.authors"/></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="post.chairs">
        <v-list-tile-action>
          <v-tooltip bottom>
            <v-icon slot="activator" color="indigo">s7-users</v-icon>
            <span>Chairs</span>
          </v-tooltip>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title><span v-html="post.chairs"/></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="post._source.organisers">
        <v-list-tile-content>
          <v-list-tile-title><span v-html="post._source.organisers"/></v-list-tile-title>
          <v-list-tile-sub-title>Organisers</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="post._source.faculty">
        <v-list-tile-content>
          <v-list-tile-title><span v-html="post._source.faculty"/></v-list-tile-title>
          <v-list-tile-sub-title>Faculty</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="post._source.speakerText">
        <v-list-tile-action>
          <v-tooltip bottom>
            <v-icon slot="activator" color="indigo">s7-speaker</v-icon>
            <span>Speaker</span>
          </v-tooltip>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title><span v-html="post._source.speakerText"/></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list v-if="post._source.aims || post._source.audience">
      <v-divider v-if="post.authors
        || post.chairs
        || post._source.speakerText
        || post._source.organisers
        || post._source.faculty
        || post.dates
        || post.location
        || post._source.room
      || congressTime"/>

      <v-list-tile v-if="post._source.aims">
        <v-list-tile-action>
          <v-tooltip bottom>
            <v-icon slot="activator" color="indigo">s7-target</v-icon>
            <span>Aims</span>
          </v-tooltip>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title><span v-html="post._source.aims"/></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="post._source.audience">
        <v-list-tile-action>
          <v-tooltip bottom>
            <v-icon slot="activator" color="indigo">s7-user</v-icon>
            <span>Audience</span>
          </v-tooltip>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title><span v-html="post._source.audience"/></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="post._source.tracks">
        <v-list-tile-action>
          <v-tooltip bottom>
            <v-icon slot="activator" color="indigo">s7-ticket</v-icon>
            <span>Audience</span>
          </v-tooltip>
        </v-list-tile-action>
        <v-list-tile-content style="height:max-content">
          <v-list-tile-title style="
                overflow: auto;
                height: max-content;"
          ><v-chip v-for="track in post._source.tracks" :key="track._id">{{track.name}}</v-chip></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-card-text v-if="post.lead || post._source.abstract">
      <span v-if="post.lead" v-html="post.lead"/>
      <span v-if="post._source.abstract">{{post._source.abstract | truncate}}</span>
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
import { truncate } from "../../filters";
import moment from "moment";
export default {
  name: "card",

  filters: {
    truncate: string => truncate(string, 300)
  },
  props: { post: { type: Object, default: () => {} } },
  computed: {
    congressTime() {
      const start = this.post._source.startTime;
      const end = this.post._source.endTime;
      const date = moment(this.post._source.startDateTime);

      return start && end && date.isValid()
        ? `${start} - ${end} - ${date.format("dddd MMMM D, YYYY")}`
        : false;
    }
  }
};
</script>
