import { Module } from '@nestjs/common'
import { CategoryInfoService } from './category-info.service'
import { CategoryInfoController } from './category-info.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryInfo } from './entities/category-info.entity'

@Module({
  imports: [TypeOrmModule.forFeature([CategoryInfo])],
  controllers: [CategoryInfoController],
  providers: [CategoryInfoService],
})
export class CategoryInfoModule {
  //TODO
}
