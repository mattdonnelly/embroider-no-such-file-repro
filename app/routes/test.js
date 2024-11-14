import Route from '@ember/routing/route';
import { test } from '../lib/test';

export default class TestRoute extends Route {
  model() {
    console.log(test());
    return null;
  }
}
