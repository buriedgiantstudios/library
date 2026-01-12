import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, type Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    data: {
      title: 'Buried Giant Studios Card Library',
    },
  },
  {
    path: 'advanced',
    loadChildren: () =>
      import('./advanced/advanced.module').then((m) => m.AdvancedPageModule),
    data: {
      title: 'Buried Giant Studios Card Library - Advanced Search',
      description: 'Craft a custom search query to find the cards you need.',
    },
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchPageModule),
    data: {
      title: 'Buried Giant Studios Card Library - Card Search',
      description: 'View card search results.',
      noindex: true,
    },
  },
  {
    path: 'card/:id',
    loadChildren: () =>
      import('./card/card.module').then((m) => m.CardPageModule),
    data: {
      title: '',
    },
  },
  {
    path: 'syntax',
    loadChildren: () =>
      import('./syntax/syntax.module').then((m) => m.SyntaxPageModule),
    data: {
      title: 'Buried Giant Studios Card Library - Search Help',
      description: 'Get help with the search operators and syntax.',
    },
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./sets/sets.module').then((m) => m.SetsPageModule),
    data: {
      title: 'Buried Giant Studios Card Library - Product List',
      description: 'View all products in the card library catalog.',
    },
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqPageModule),
    data: {
      title: 'Buried Giant Studios Card Library - FAQs',
      description:
        'View a list of frequently asked questions on a per-product basis.',
    },
  },
  {
    path: 'errata',
    loadChildren: () =>
      import('./errata/errata.module').then((m) => m.ErrataPageModule),
    data: {
      title: 'Buried Giant Studios Card Library - Errata',
      description: 'View a list of errata on a per-product basis.',
    },
  },
  {
    path: 'changelog',
    loadChildren: () =>
      import('./changelog/changelog.module').then((m) => m.ChangelogPageModule),
    data: {
      title: 'Buried Giant Studios Card Library - Changelogs',
      description: 'View a list of changelogs on a per-product basis.',
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
