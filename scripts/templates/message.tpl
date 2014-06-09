
<p class="">
	<% if( me ){ %>
	<div class="ui green message">
	<% } else { %>
	<div class="ui blue message">
	<% } %>
		<h4>
			<%= message.get( 'clientName' ) %> wrote:
		</h4>
		<p>
			<%= message.get( 'content' ) %>	
		</p>
		<h6>
			<%= message.get( 'createDate' ) %>
		</h6>
	</div>
</p>