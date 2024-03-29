import {RoutesConfig} from './config/routes.config';
import {LoadingBarConfig} from './config/loading_bar.config';
import {ThemeConfig} from './config/theme.config';
import {SatellizerConfig} from './config/satellizer.config';
import {PusherConfig} from './config/pusher.config';

angular.module('app.config')
    .config(RoutesConfig)
	.config(LoadingBarConfig)
	.config(ThemeConfig)
	.config(SatellizerConfig)
  .config(PusherConfig);
