// Rest API serves states to fomments libraries via AJAX
import Skin1English from './skin/skin-1-english';
import Skin1Portuguese from './skin/skin-1-portuguese';
import Skin1French from './skin/skin-1-french';
import Skin1Chinese from './skin/skin-1-chinese';
import Skin1German from './skin/skin-1-german';
import Skin1Spanish from './skin/skin-1-spanish';
import Diet1English from './diet/diet-1-english';
import Diet1German from './diet/diet-1-german';
import Diet1French from './diet/diet-1-french';
import Diet1Spanish from './diet/diet-1-spanish';
import Diet1Chinese from './diet/diet-1-chinese';
import Diet1Portuguese from './diet/diet-1-portuguese';
import Muscle1English from './muscle/muscle-1-english';
import Muscle1German from './muscle/muscle-1-german';
import Muscle1Spanish from './muscle/muscle-1-spanish';
import Muscle1French from './muscle/muscle-1-french';
import Muscle1Chinese from './muscle/muscle-1-chinese';
import Muscle1Portuguese from './muscle/muscle-1-portuguese';
import AppDownload1English from './app-download/app-download-1-english';
import AppDownload1Portuguese from './app-download/app-download-1-portuguese';
import AppDownload1German from './app-download/app-download-1-german';
import AppDownload1Chinese from './app-download/app-download-1-chinese';
import AppDownload1French from './app-download/app-download-1-french';
import AppDownload1Spanish from './app-download/app-download-1-spanish';
import ErectileDysfunction1English from './erectile-dysfunction/erectile-dysfunction-1-english';
import ErectileDysfunction1Portuguese from './erectile-dysfunction/erectile-dysfunction-1-portuguese';
import ErectileDysfunction1Spanish from './erectile-dysfunction/erectile-dysfunction-1-spanish';
import ErectileDysfunction1German from './erectile-dysfunction/erectile-dysfunction-1-german';
import ErectileDysfunction1French from './erectile-dysfunction/erectile-dysfunction-1-french';
import ErectileDysfunction1Chinese from './erectile-dysfunction/erectile-dysfunction-1-chinese';
import Giveaway1English from './giveaway/giveaway-1-english';
import Giveaway1German from './giveaway/giveaway-1-german';
import Giveaway1Spanish from './giveaway/giveaway-1-spanish';
import Giveaway1Portuguese from './giveaway/giveaway-1-portuguese';
import Giveaway1French from './giveaway/giveaway-1-french';
import Giveaway1Chinese from './giveaway/giveaway-1-chinese';

// Enable cross origin requests for all endpoints
JsonRoutes.setResponseHeaders({
  'Cache-Control': 'no-store',
  Pragma: 'no-cache',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
});

// ONLY FOR TESTING: return the right static section for general comments.
// deployment will be to a CDN for these free sections.
JsonRoutes.add('get', 'sections/:sectionId', (req, res) => {
  const params = req.params.sectionId;
  const [userId, ...sectionIdArray] = _.without(params.split('-'), '');
  const sectionId = sectionIdArray.join('-');

  // get section back..
  switch (sectionId) {
    case 'skin-1-english':
      JsonRoutes.sendResult(res, { data: Skin1English({ userId }) });
      break;
    case 'skin-1-portuguese':
      JsonRoutes.sendResult(res, { data: Skin1Portuguese({ userId }) });
      break;
    case 'skin-1-german':
      JsonRoutes.sendResult(res, { data: Skin1German({ userId }) });
      break;
    case 'skin-1-french':
      JsonRoutes.sendResult(res, { data: Skin1French({ userId }) });
      break;
    case 'skin-1-chinese':
      JsonRoutes.sendResult(res, { data: Skin1Chinese({ userId }) });
      break;
    case 'skin-1-spanish':
      JsonRoutes.sendResult(res, { data: Skin1Spanish({ userId }) });
      break;
    case 'diet-1-english':
      JsonRoutes.sendResult(res, { data: Diet1English({ userId }) });
      break;
    case 'diet-1-french':
      JsonRoutes.sendResult(res, { data: Diet1French({ userId }) });
      break;
    case 'diet-1-portuguese':
      JsonRoutes.sendResult(res, { data: Diet1Portuguese({ userId }) });
      break;
    case 'diet-1-spanish':
      JsonRoutes.sendResult(res, { data: Diet1Spanish({ userId }) });
      break;
    case 'diet-1-chinese':
      JsonRoutes.sendResult(res, { data: Diet1Chinese({ userId }) });
      break;
    case 'diet-1-german':
      JsonRoutes.sendResult(res, { data: Diet1German({ userId }) });
      break;
    case 'muscle-1-english':
      JsonRoutes.sendResult(res, { data: Muscle1English({ userId }) });
      break;
    case 'muscle-1-french':
      JsonRoutes.sendResult(res, { data: Muscle1French({ userId }) });
      break;
    case 'muscle-1-chinese':
      JsonRoutes.sendResult(res, { data: Muscle1Chinese({ userId }) });
      break;
    case 'muscle-1-german':
      JsonRoutes.sendResult(res, { data: Muscle1German({ userId }) });
      break;
    case 'muscle-1-spanish':
      JsonRoutes.sendResult(res, { data: Muscle1Spanish({ userId }) });
      break;
    case 'muscle-1-portuguese':
      JsonRoutes.sendResult(res, { data: Muscle1Portuguese({ userId }) });
      break;
    case 'app-download-1-english':
      JsonRoutes.sendResult(res, { data: AppDownload1English({ userId }) });
      break;
    case 'app-download-1-spanish':
      JsonRoutes.sendResult(res, { data: AppDownload1Spanish({ userId }) });
      break;
    case 'app-download-1-french':
      JsonRoutes.sendResult(res, { data: AppDownload1French({ userId }) });
      break;
    case 'app-download-1-portuguese':
      JsonRoutes.sendResult(res, { data: AppDownload1Portuguese({ userId }) });
      break;
    case 'app-download-1-german':
      JsonRoutes.sendResult(res, { data: AppDownload1German({ userId }) });
      break;
    case 'app-download-1-chinese':
      JsonRoutes.sendResult(res, { data: AppDownload1Chinese({ userId }) });
      break;
    case 'erectile-dysfunction-1-english':
      JsonRoutes.sendResult(res, { data: ErectileDysfunction1English({ userId }) });
      break;
    case 'erectile-dysfunction-1-german':
      JsonRoutes.sendResult(res, { data: ErectileDysfunction1German({ userId }) });
      break;
    case 'erectile-dysfunction-1-spanish':
      JsonRoutes.sendResult(res, { data: ErectileDysfunction1Spanish({ userId }) });
      break;
    case 'erectile-dysfunction-1-french':
      JsonRoutes.sendResult(res, { data: ErectileDysfunction1French({ userId }) });
      break;
    case 'erectile-dysfunction-1-portuguese':
      JsonRoutes.sendResult(res, { data: ErectileDysfunction1Portuguese({ userId }) });
      break;
    case 'erectile-dysfunction-1-chinese':
      JsonRoutes.sendResult(res, { data: ErectileDysfunction1Chinese({ userId }) });
      break;
    case 'giveaway-1-english':
      JsonRoutes.sendResult(res, { data: Giveaway1English({ userId }) });
      break;
    case 'giveaway-1-german':
      JsonRoutes.sendResult(res, { data: Giveaway1German({ userId }) });
      break;
    case 'giveaway-1-french':
      JsonRoutes.sendResult(res, { data: Giveaway1French({ userId }) });
      break;
    case 'giveaway-1-portuguese':
      JsonRoutes.sendResult(res, { data: Giveaway1Portuguese({ userId }) });
      break;
    case 'giveaway-1-chinese':
      JsonRoutes.sendResult(res, { data: Giveaway1Chinese({ userId }) });
      break;
    case 'giveaway-1-spanish':
      JsonRoutes.sendResult(res, { data: Giveaway1Spanish({ userId }) });
      break;
    default: {
      JsonRoutes.sendResult(res, { data: 'No section found for this id' });
    }
  }
});
