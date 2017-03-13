// Rest API serves states to fomments libraries via AJAX
import SkinEns01 from './skin-ens-01';

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
JsonRoutes.add('get', '/sections/:sectionId', (req, res) => {
  const sectionId = req.params.sectionId;
  // get section back..
  switch (sectionId) {
    case 'skin-ens-01':
      JsonRoutes.sendResult(res, { data: SkinEns01 });
      break;

    default:
      JsonRoutes.sendResult(res, { data: SkinEns01 });
  }
});
