import React, { useRef } from 'react';
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
  onDragStateChange?: (dragging: boolean) => void;
}

export const DragDropReorder = ({ 
  items, 
  visibility, 
  onReorder, 
  onToggleVisibility,
  onDragStateChange
}: DragDropReorderProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 10,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Filter out 'stock-header' so it is not draggable or togglable
  const filteredItems = items.filter(id => id !== 'stock-header');

  const draggingRef = useRef(false);

  const handleDragStart = () => {
    draggingRef.current = true;
    onDragStateChange?.(true);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    draggingRef.current = false;
    onDragStateChange?.(false);
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = filteredItems.indexOf(active.id as string);
      const newIndex = filteredItems.indexOf(over?.id as string);

      const newOrder = arrayMove(filteredItems, oldIndex, newIndex);
      // Reconstruct the full order with stock-header at the start if it was there
      let fullOrder = items;
      if (items[0] === 'stock-header') {
        fullOrder = ['stock-header', ...newOrder];
      } else {
        fullOrder = newOrder;
      }
      onReorder(fullOrder);
    }
  };

  const handleDragCancel = () => {
    draggingRef.current = false;
    onDragStateChange?.(false);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={filteredItems} strategy={verticalListSortingStrategy}>
        <div className="space-y-0">
          {filteredItems.map((id) => (
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