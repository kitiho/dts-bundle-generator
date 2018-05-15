import { SomeCoolInterface } from 'package-with-export-eq';
import { NamedDeclaration } from 'typescript';
import { EventEmitter } from 'events';

export class StoppableEventEmitter extends EventEmitter {
	public emitStoppableEvent(): this {
		return this;
	}
}

export type ExportType = SomeCoolInterface | NamedDeclaration | string;
