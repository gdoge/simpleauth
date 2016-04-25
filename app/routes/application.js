// import DS from 'ember-data';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
//
// export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
//   authorizer: 'authorizer:oauth2'
// });

 import ember from 'ember';
 import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

 export default Ember.Route.extend(ApplicationRouteMixin);
