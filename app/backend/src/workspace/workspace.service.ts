import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './workspace.entity';
import { Repository } from 'typeorm';
import { CreateWorkspaceDto } from './dto/createWorkspaceDto.dto';
@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace)
    private workspaceRepository: Repository<Workspace>,
  ) {}

  createWorkspace(workspace: CreateWorkspaceDto) {
    const newWorkspace = this.workspaceRepository.create(workspace);
    return this.workspaceRepository.save(newWorkspace);
  }
}
