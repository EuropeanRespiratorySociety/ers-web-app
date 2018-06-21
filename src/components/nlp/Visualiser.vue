<template>
<v-content>
  <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
          <v-card>
            <v-card-text>
              <v-text-field
                name="input-7-1"
                label="Text to analyse"
                multi-line
                v-model="text"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
  <v-container fluid v-if="result.length > 0">
    <v-layout row>
      <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
        <v-card>
          <v-card-text v-html="result">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container fluid v-if="result2.length > 0">
    <v-layout row>
      <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
        <v-card>
        <v-card-title><h3>ERS News</h3></v-card-title>
          <v-card-text v-html="result2">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container fluid v-if="result3.length > 0">
    <v-layout row>
      <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
        <v-card>
        <v-card-title><h3>Whashignton Post News</h3></v-card-title>
          <v-card-text v-html="result3">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-content>
</template>

<script>
// import { DisplaCyENT } from 'displacy-ent'
import axios from 'axios'

// const d = new DisplaCyENT('http://localhost:8000/analyse', {
//   container: '#displacy',
//   defaultEnts: ['person', 'org', 'date']
// })

const HTTP = axios.create({
  baseURL: 'http://localhost:8000'
})

export default {
  name: 'visualiser',
  data () {
    return {
      text: 'The unaddressed palliative care needs of patients with advanced, nonmalignant, lung disease highlight the urgent requirement for new models of care. This study describes a new integrated respiratory and palliative care service and examines outcomes from this service. The Advanced Lung Disease Service (ALDS) is a long-term, multidisciplinary, integrated service. In this single-group cohort study, demographic and prospective outcome data were collected over 4 years, with retrospective evaluation of unscheduled healthcare usage. Of 171 patients included, 97 (56.7%) were male with mean age 75.9 years and 142 (83.0%) had chronic obstructive pulmonary disease. ALDS patients had severely reduced pulmonary function (median (interquartile range (IQR)) forced expiratory volume in 1 s 0.8 (0.6–1.1) L and diffusing capacity of the lung for carbon monoxide 37.5 (29.0–48.0) % pred) and severe breathlessness. All patients received nonpharmacological breathlessness management education and 74 (43.3%) were prescribed morphine for breathlessness (median dose 9 mg·day−1). There was a 52.4% reduction in the mean number of emergency department respiratory presentations in the year after ALDS care commenced (p=0.007). 145 patients (84.8%) discussed and/or completed an advance care plan. 61 patients died, of whom only 15 (24.6%) died in an acute hospital bed. While this was a single-group cohort study, integrated respiratory and palliative care was associated with improved end-of-life care and reduced unscheduled healthcare usage. Integrated respiratory and palliative care is associated with better end-of-life care for patients with advanced lung disease <http://ow.ly/mgkn30hlPXV>',
      text2: "Pulmonary embolism (PE) management that does not adhere to guidelines for indications related to anticoagulation, thrombolytics and inferior vena cava filters is associated with worse patient outcomes, according to new research published in the European Respiratory Journal. A total of 2,096 patients with confirmed PE were included in the study, which had a prospective observational cohort design. Two investigators independently analysed each patient's chart and classified the management as adherent or non-adherent; 1,688 patients received care that adhered to management guidelines, while 408 patients received non-adherent management. The researchers then compared all-cause mortality, PE-related mortality, recurrent venous thromboembolism (VTE) and major bleeding events during the first month of follow-up after diagnosis in patients whose care adhered to guidelines versus patients whose care did not. The data showed that patients receiving non-adherent management were significantly more likely to experience all-cause or PE-related mortality during follow-up; risk of death from any cause among patients with non-adherent management was 2-times higher, and the risk of PE-specific death was about 5-times higher than in patients with adherent management. Non-adherent management was also a significant independent predictor of recurrent VTE and major bleeding. Using cohort data of 34,380 PE patients from the RIETE registry, the prognostic significance of non-adherent management in patients with acute symptomatic PE was confirmed. Clinicians most commonly did not adhere to management guidelines when patients were haemodynamically compromised, and when patients had an increased risk of bleeding.The authors conclude that management that does not adhere to evidence-based guidelines related to anticoagulation, use of thrombolytics and use of inferior vena cava filters frequently occurred, and was associated with worse outcomes in patients with acute PE. A potentially limiting factor to this study is the observational and non-randomised design, and that the conclusions are limited to the specific indications that the researchers used for defining deviation from management guidelines.",
      text3: `VOLCANO, Hawaii — Hawaii's Kilauea volcano erupted explosively early Thursday, tossing boulders hundreds of feet and sending a plume of ash about 30,000 feet into the predawn sky.

      A webcam at the Hawaii Volcano Observatory caught the aftermath of the short-lived eruption on film: an onslaught of wet and dusty ash raining down on a darkened landscape. From the summit of Mauna Loa volcano, 20 miles away, cameras photographed an anvil-shaped plume billowing on the horizon.

      In a news conference, scientist Michelle Combs of the U.S. Geological Survey said the activity at the vent could become explosive again. “It's a real dynamic situation up there,” she said of the summit.

      Scientists had warned for days about a major eruption as the lava lake that once filled the crater at Kilauea's summit began draining back into the ground. Their concern was that the sinking molten rock would create steam as it interacted with the water table and that the steam would then jet upward, hurling heavy rocks and ash into the sky in a phenomenon known as a phreatic eruption.

      “This is the sort of explosive activity that was anticipated,” said USGS geophysicist Mike Poland, who was based at Kilauea from 2005 to 2015. “It's not going to be the only one. Very likely there will be additional events.”

      Hawaii Volcanoes National Park officials said the caldera — the depression at the center of the volcano — dropped more than three feet overnight, triggering frequent earthquakes that have cracked highways in the area. As the caldera sinks further, it may set off further steam-driven explosions, they said.

      An image of the early morning eruption at Kilauea taken by a webcam at Mauna Loa volcano. (USGS)
      Though dramatic, Thursday's early eruption did not pose an immediate threat to any people in the vicinity, Poland said. Observatory staff had left their Kilauea station Wednesday, for a facility at the University of Hawaii in Hilo, after concluding that wind could carry ashfall their way.

      According to Poland, the greatest impact was to an area within a few hundred yards of the summit's eruptive vent. That's where the explosion would have sent hot gas and 1,000-pound rocks soaring. For this reason, the national park has been closed since last week.

      But wind is carrying the plume from the eruption northeast, raining ash into nearby communities. Broadcasting on local radio stations, Hawaii Civil Defense officials warned that ash poses the main health threat from the eruption. Residents were instructed to shelter in place if they found themselves in the path of the plume.

      Visual story | Before and after: Kilauea’s wrath on Hawaii’s Big Island VIEW GRAPHIC 
      Visual story | Before and after: Kilauea’s wrath on Hawaii’s Big Island

      Depending on weather conditions, USGS said, ash might fall as far as Hilo, 30 miles to the northeast.

      The observatory also warned that vog — a noxious smog formed when sulfur dioxide from eruptive vents interacts with water vapor and oxygen in the air — has been reported in the community of Pahala, southwest of the volcano.

      Meanwhile, stormy weather caused the ash to mix with rain, creating a dark paste that coated rooftops and car windshields. In the village of Volcano, barely three miles from the summit, lifelong resident Lance Benevides went through the familiar protocol to cope with an eruption, including detaching his roof gutters from his water tank to keep ash out of the catchment system that serves as his water supply.

      Then he headed to the Volcano Store, a local gathering spot, where he sat with friends and sipped coffee Thursday morning — a ritual not even Kilauea could disturb. “We all live in a circle around this volcano,” said Benevides, 55. “So we know what to do.”
      Though disruptive, even painful for people living near Kilauea — especially those who have already lost their homes — the eruption will not significantly affect life on the rest of the Big Island, Poland said. “And it is not likely to turn into some catastrophic event,” he added. 

Kilauea, a massive shield volcano on Hawaii's Big Island, is the site of the world's longest ongoing eruption, one that has oozed lava since 1983. But in recent weeks the volcano has become particularly restless. About 20 fissures opened in communities along the volcano's eastern slopes, prompting evacuations of nearly 2,000 residents and engulfing dozens of homes in lava.

 0:58
‘Explosive’ eruption at Hawaii’s Kilauea
An ash plume burst 30,000 feet into the sky from the Kilauea volcano on Hawaii’s Big Island on May 17. (Patrick Martin, Allie Caren/The Washington Post)

That activity along the East Rift Zone caused a dramatic depressurization of the magma column below Kilauea's summit, slowly draining the lava lake in the summit crater. In recent days, smaller eruptions there sent ash surging into the sky.

But those events were “not the big one” caused by interactions between hot rock and ground water, Combs said Tuesday.

Thursday's event was, if not the big one, then certainly a big one, researchers said. As the molten rock dropped below the level of the water table, it's likely that water in the surrounding rock began pouring into the vacated chamber — much the way water rushes to fill a recently dug well, said Charlotte Rowe, a geophysicist at Los Alamos National Laboratory.

The water would then flash into steam, “and steam as we know is a very powerful source of energy, a very powerful propellant,” Rowe said. 

Kilauea has erupted in this manner before. In May 1924, the Hawaii Volcano Observatory reported more than 50 explosive events over the course of two-and-a-half weeks at the volcano's summit. The lava lake had drained from the summit crater several months earlier — the scenario now being repeated. The eventual eruptions generated ash clouds more than five miles high and threw blocks weight as much as 28,000 pounds out of the crater. One person was killed by falling debris from the largest eruption.

The Big Island’s Kilauea erupts, prompting evacuations as lava threatens communities.
Coincidentally, Thursday's explosive event comes one day before the 94th anniversary of that death and on the 38th anniversary of the 1980 eruption of Mount St. Helens in Washington state.

What is happening at Kilauea is fundamentally different from that 1980 eruption, experts said. Shield volcanoes like Kilauea produce a runny, basaltic lava that does not tend to erupt as dramatically as steep stratovolcanos like Mount St. Helens. Whereas St. Helens sits along the geologically active boundary of the Pacific Plate, Kilauea and the other Hawaiian volcanoes are powered by a hot spot deep within Earth's mantle.

But phreatic eruptions can still pose a deadly threat to anyone near the eruptive vent — and they are extremely difficult to forecast, Poland said. Eruptions involving magma offer warning signs for a potential evacuation, including inflation of the surrounding ground, seismic activity caused as rocks break and changes in the gases being vented.

Phreatic eruptions are “much more random,” Poland said. More than 30 people were killed when a 2014 phreatic eruption at Japan's Mount Ontake caught them unaware near the summit.

In addition to monitoring the volcano's current activity, researchers are scouring data from Kilauea's extensive monitoring network — of tiltmeters, seismometers, and ground and aerial gas detectors — in search of any changes that preceded Thursday's event. Their hope is to pinpoint warning signs that could be used to predict phreatic eruptions in Hawaii and elsewhere.

Kaplan reported from Washington.`,
      result: '',
      result2: '',
      result3: ''
    }
  },

  methods: {
    async submit () {
      // const r = await HTTP.get(`/analyse?text=${this.text}`)
      const r = await HTTP.post('/analyse', {text: this.text})
      const r2 = await HTTP.post('/analyse', {text: this.text2})
      const r3 = await HTTP.post('/analyse', {text: this.text3})

      this.result = r.data
      this.result2 = r2.data
      this.result3 = r3.data
      // console.log(d.render(r.data.text, r.data.ents, ['person', 'org', 'date']))
    }
  }
}
</script>

<style>

</style>
