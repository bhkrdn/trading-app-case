import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Eye, EyeOff, GripVertical } from 'lucide-react';
import { COMPONENT_REGISTRY } from '@/utils/componentRegistry';

interface SortableItemProps {
  id: string;
  isVisible: boolean;
  onToggle: (id: string) => void;
}

const SortableItem = ({ id, isVisible, onToggle }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const registryItem = COMPONENT_REGISTRY[id];
  if (!registryItem) return null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`border border-border rounded-lg p-3 bg-background mb-2 ${
        isDragging ? 'shadow-lg' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          {/* Drag Handle */}
          <button
            {...attributes}
            {...listeners}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors cursor-grab active:cursor-grabbing"
          >
            <GripVertical className="w-4 h-4" />
          </button>

          {/* Visibility Toggle */}
          <button
            onClick={() => onToggle(id)}
            className={`p-1 rounded transition-colors ${
              isVisible 
                ? 'text-foreground hover:bg-muted' 
                : 'text-muted-foreground hover:bg-muted'
            }`}
          >
            {isVisible ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </button>

          {/* Component Name */}
          <span className={`text-sm font-medium flex-1 ${
            isVisible ? 'text-foreground' : 'text-muted-foreground'
          }`}>
            {registryItem.name}
          </span>
        </div>
      </div>
    </div>
  );
};

interface DragDropReorderProps {
  items: string[];
  visibility: Record<string, boolean>;
  onReorder: (newOrder: string[]) => void;
  onToggleVisibility: (id: string) => void;
}

export const DragDropReorder = ({ 
  items, 
  visibility, 
  onReorder, 
  onToggleVisibility 
}: DragDropReorderProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.indexOf(active.id as string);
      const newIndex = items.indexOf(over?.id as string);

      const newOrder = arrayMove(items, oldIndex, newIndex);
      onReorder(newOrder);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="space-y-0">
          {items.map((id) => (
            <SortableItem
              key={id}
              id={id}
              isVisible={visibility[id]}
              onToggle={onToggleVisibility}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}; 