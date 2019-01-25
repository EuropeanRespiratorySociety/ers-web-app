<template>
  <v-flex xs12 sm9>
    <v-card>
      <v-card-text>
        <span v-html="cmeReadingsText" />
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "cme-readings",
  data() {
    return {
      active: null,
      cmeReadingsText:
        "<ol><li>Dekhuijzen PNR, Vincken W, Virchow JC, et al. Prescription of inhalers in asthma and COPD: towards a rational, rapid and effective approach. Respir Med. 2013; 107: 1817-21.</li><li>Lavorini F, Mannini C, Chellini E, Fontana GA. Optimising Inhaled Pharmacotherapy for Elderly Patients with Chronic Obstructive Pulmonary Disease: The Importance of Delivery Devices. Drugs Aging. 2016; 33: 461-73.</li><li>Melani AS, Bonavia M, Cilenti V, et al; Gruppo Educazionale Associazione Italiana Pneumologi Ospedalieri. Inhaler mishandling remains common in real life and is associated with reduced disease control. Respir Med. 2011; 105: 930-8.</li><li>Vincken W, Dekhuijzen PR, Barnes P; ADMIT Group. The ADMIT series. Issues in inhalation therapy. 4) How to choose inhaler devices for the treatment of COPD. Prim Care Respir J. 2010; 19: 10-20.</li><li>Virchow JC, Crompton GK, Dal Negro R, Pedersen S, Magnan A, Seidenberg J, Barnes PJ. Importance of inhaler devices in the management of airway disease. Respir Med. 2008; 102: 10-19.</li><li>Wieshammer S, Dreyhaupt J. Dry powder inhalers: which factors determine the frequency of handling errors? Respiration. 2008; 75: 18-25.</li></ol>"
    };
  }
};
</script>
