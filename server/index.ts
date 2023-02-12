// import { hook } from '@modern-js/runtime/server';
// // MiddlewareConsumer 是一个帮助类 内置方法来管理中间件
// import { Injectable, Controller, Module, Get } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// // 控制层
// // 带有单个路由的基本控制器
// // ...('cats') 路由路径前缀(可选)
// @Controller('cats')
// export class CatsController {
//   // 注入依赖关系
//   constructor(private readonly catsService: CatsService) {}

//   @Get()
//   getHello() {
//     return this.catsService.getHello();
//   }
// }
// // 服务具体实现
// // 带有单个路由的基本控制器
// // Provider 只是一个用 @Injectable() 装饰器注释的类
// @Injectable()
// class CatsService {
//   getHello(): string {
//     return `<div>This is nestJS</div>`;
//   }
// }
// // 模块
// @Module({
//   // 控制器
//   controllers: [CatsController],
//   // 供应商
//   providers: [CatsService],
// })
// class CatsModule {}
// TODO: 无法修复 errer 后面通过 wsl 进行处理
// TODO: https://github.com/modern-js-dev/modern.js/issues/180
// export default hook(({ addMiddleware }) => {
//   addMiddleware((req: Request, res: Response, next: NextFunction) => {
//     if (req.headers.cookie['login-token']) {
//       return next();
//     } else {
//       res.status = 401;
//       res.end();
//     }
//   });
//   addMiddleware(CatsModule);
// });
