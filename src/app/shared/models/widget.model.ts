export interface WidgetModel {
    widgetId: string;
    userId: string;
    dashboardId: string;
    widgetType: string;
    section: string;
    x: number;
    y: number;
    width: number;
    height: number;
    contents?: [{
      title: string;
      description: string;
      chartType: string;

    }
    ];

  }
