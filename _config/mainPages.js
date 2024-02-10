export default {
  auctions: {
    permission: 'iauctions.auctions.manage',
    activated: true,
    authenticated: true,
    path: '/auctions/auctions/index',
    name: 'qauctions.admin.auctions',
    crud: import('modules/qauction/_crud/auctions'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iauctions.cms.sidebar.adminAuctions',
    icon: 'fa-light fa-gavel',
    subHeader: {
      refresh: true,
    }
  },
  bids: {
    permission: 'iauctions.bids.manage',
    activated: true,
    authenticated: true,
    path: '/auctions/bids/index',
    name: 'qauctions.admin.bids',
    crud: import('modules/qauction/_crud/bids'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iauctions.cms.sidebar.adminBids',
    icon: 'fa-light fa-hand-point-up',
    subHeader: {
      refresh: true,
    }
  },
  categories: {
    permission: 'iauctions.categories.manage',
    activated: true,
    authenticated: true,
    path: '/auctions/categories/index',
    name: 'qauctions.admin.categories',
    crud: import('modules/qauction/_crud/categories'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iauctions.cms.sidebar.adminCategories',
    icon: 'fa-light fa-layer-group',
    subHeader: {
      refresh: true,
    }
  },

}
