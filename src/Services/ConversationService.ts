import api from '@/Utils/ApiConfig';
import type { ConversationDto, UpdateConversationRequest,  ConversationHistoryDto } from '@/Interfaces/Chat/ChatInterfaces';

export function getConversationsByRole() {
  return api.get<{ data: ConversationDto[] }>('/Conversations/getByRole');
}

export function getConversation(id: number) {
  return api.get<{ data: ConversationDto }>(`/Conversations/${id}`);
}

export function getPendingConversations() {
  return api.get<{ data: ConversationDto[] }>('/Conversations/pending');
}

export function assignAgent(
  conversationId: number,
  agentUserId: string,
  status: string
) {
  return api.put(
    `/Conversations/${conversationId}/assign`,
    null,
    { params: { agentUserId, status } }
  );
}

export function closeConversation(conversationId: number) {
  return api.put(`/Conversations/${conversationId}/close`);
}

export function getAssignedCount(agentUserId: number) {
  return api.get<number>(`/Conversations/${agentUserId}/assigned-count`);
}
export function updateConversation(
  conversationId: number,
  payload: Partial<UpdateConversationRequest>
) {
  return api.put(`/Conversations/${conversationId}`, payload)
}

export function updateTag(conversationId: number, 
  payload: string[]){
  return api.put(`/Conversations/tags/${conversationId}`, payload)
}

/**
 * Trae todas las conversaciones + mensajes + attachments de un contacto
 */
export function getHistoryByContact(contactId: number) {
  return api.get<{ data: ConversationHistoryDto[] }>(
    `/Conversations/${contactId}/history`
  );
}

/**
 * Genera resumen completo de TODO el histórico de un contacto
 */
export function summarizeAllByContact(contactId: number) {
  return api.post<{ data: string }>(
    `/Conversations/${contactId}/summary`
  );
}