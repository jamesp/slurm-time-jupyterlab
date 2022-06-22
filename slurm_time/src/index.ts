import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IStatusBar } from '@jupyterlab/statusbar';

import { Widget } from '@lumino/widgets';

import { requestAPI } from './handler';

/**
 * Initialization data for the slurm-time extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'slurm-time:plugin',
  autoStart: true,
  requires: [IStatusBar],
  activate: (app: JupyterFrontEnd, statusBar: IStatusBar) => {

    
    // const { commands, shell } = app;

    console.log('JPs JupyterLab extension slurm-time is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The slurm_time server extension appears to be missing.\n${reason}`
        );
      });

      const statusWidget = new Widget();
      statusWidget.node.textContent = "jamie"
      // labStatus.busySignal.connect(() => {
      //   statusWidget.node.textContent = labStatus.isBusy ? 'Busy' : 'Idle';
      // });

      statusBar.registerStatusItem('lab-status', {
        align: 'middle',
        item: statusWidget
      });
  }
};

export default plugin;
